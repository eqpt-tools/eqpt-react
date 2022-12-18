import fs from 'fs-extra';

// The directory name in which we store our application data based on our environment
const appName =
  process.env.NODE_ENV === 'production'
    ? 'EQPT Tools'
    : 'EQPT Tools (development)';

// The directory in which we store our application data
const basePath =
  process.platform === 'win32'
    ? `${process.env.APPDATA}\\${appName}\\`
    : `${process.env.HOME}/Library/Application Support/${appName}/`;

// A helper function that returns the full path at which a resource is stored
const getPath = (fileName: string) => basePath + fileName;

// A helper function that checks whether a file exists, if not, it writes the schema's default data
const checkPath = async (fileName: string, data: object) => {
  const filePath = getPath(fileName);

  const exists = await fs.pathExists(filePath);

  if (exists) return;

  await fs.ensureDir(basePath);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

// A helper function that checks whether a file exists, if not, it writes the schema's default data
const restoreDefaults = async function restoreDefaults<T>(
  fileName: string,
  data: object,
) {
  const filePath = getPath(fileName);

  await fs.writeFile(filePath, JSON.stringify(data, null, 2));

  return data as T;
};

// A helper function that returns a function that reads data for a schema
export function readFile<T>({
  fileName,
  defaultData,
  schema,
}: {
  fileName: string;
  defaultData: object;
  schema: any;
}) {
  return async function innerReadFile() {
    const filePath = getPath(fileName);

    // Check that the file we're trying to read exists
    // If not, create the file and store the default data
    await checkPath(fileName, defaultData);

    const fileData = fs.readFileSync(filePath, { encoding: 'utf-8' });

    try {
      const jsonData = JSON.parse(fileData) as T;
      const isValid: boolean = schema.isValidSync(jsonData);

      // If schema does not pass validation, restore default data
      if (!isValid) return restoreDefaults<T>(fileName, defaultData);

      return jsonData;
    } catch (err) {
      // If an error occurred while parsing JSON, restore default data
      return restoreDefaults<T>(fileName, defaultData);
    }
  };
}

// A helper function that returns a function writes data for a schema
export function writeFile<T>({
  fileName,
  defaultData,
}: {
  fileName: string;
  defaultData: object;
}) {
  return async function innerWriteFile(data: T) {
    const filePath = getPath(fileName);

    // Check that the file we're trying to read exists
    // If not, create the file and store the default data
    await checkPath(fileName, defaultData);

    // Write the data to storage
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  };
}
