import React, { useCallback } from 'react';
import Image from 'next/image';
import pluralize from 'pluralize';
import { faCopy } from '@fortawesome/pro-solid-svg-icons/faCopy';
import { faPaperPlane } from '@fortawesome/pro-solid-svg-icons/faPaperPlane';
import copy from 'copy-to-clipboard';
import { faShoePrints } from '@fortawesome/pro-solid-svg-icons/faShoePrints';
import useVariantContext from '../../../context/VariantContext';
import Text from '../../shared/Text';
import Button from '../../shared/Button';
import useBulkSelectContext from '../../../context/BulkSelectContext';
import { alertSuccess } from '../../../helpers/toast';
import Empty from '../../shared/Empty';

export default function ActiveProduct() {
  const { product } = useVariantContext();
  const { selectedRows } = useBulkSelectContext();

  const handleCopyAll = useCallback(() => {
    if (!product) return;

    copy(product.variants.map((v) => v.id).join('\n'));
    alertSuccess('Copied all variants to clipboard.');
  }, [product]);

  const handleCopySelected = useCallback(() => {
    if (!product) return;

    const selectedIndices = Object.keys(selectedRows);
    const selectedVariants = selectedIndices.map((i) => product.variants[i]);

    copy(selectedVariants.map((v) => v.id).join('\n'));
    alertSuccess(`Copied ${selectedVariants.length} variants to clipboard.`);
  }, [product, selectedRows]);

  if (!product)
    return (
      <Empty
        title="No product"
        subtitle="Scrape or load a saved product to get started."
        icon={faShoePrints}
      />
    );

  return (
    <div className="bg-[#1E1F29] rounded p-4 w-full">
      <div className="space-y-4">
        <div className="flex space-x-4">
          <div className="w-[100px] h-[100px]">
            <Image
              src={product.image}
              alt={product.title}
              blurDataURL="00AAw+"
              height={100}
              width={100}
              className="rounded"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Text uppercase tracking="widest" weight="semibold" opacity={60}>
              {product.store}
            </Text>
            <Text weight="semibold" size="xl" opacity={100} lineClamp={1}>
              {product.title}
            </Text>
            <Text weight="semibold" opacity={60}>
              {product.variants.length}{' '}
              {pluralize('Variant', product.variants.length)} Found
            </Text>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="space-x-3">
            <Button
              type="button"
              size="md"
              color="primary"
              icon={faCopy}
              onClick={handleCopyAll}
            >
              Copy All
            </Button>
            <Button
              type="button"
              size="md"
              color="primary"
              icon={faCopy}
              onClick={handleCopySelected}
            >
              Copy Selected
            </Button>
          </div>
          <div className="flex space-x-3">
            <Button
              type="button"
              size="md"
              color="secondary"
              icon={faPaperPlane}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
