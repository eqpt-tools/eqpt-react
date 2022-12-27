import { Product } from '@local/graphql';
import React, { useCallback } from 'react';
import Image from 'next/image';
import pluralize from 'pluralize';
import Text from '../../shared/Text';
import useVariantContext from '../../../context/VariantContext';
import Button from '../../shared/Button';

interface Props {
  product: Product;
}

export default function SavedProduct({ product }: Props) {
  const { setProduct } = useVariantContext();

  const handleLoad = useCallback(() => {
    setProduct(product);
  }, [setProduct, product]);

  return (
    <div className="flex-col bg-[#262732] rounded p-4 space-y-2">
      <div className="flex space-x-4">
        <div className="flex flex-col">
          <div className="w-[60px] h-[60px]">
            <Image
              src={product.image}
              alt={product.title}
              blurDataURL="00AAw+"
              height={60}
              width={60}
              className="rounded"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-0">
          <Text uppercase tracking="widest" weight="semibold" opacity={60}>
            {product.store}
          </Text>
          <Text weight="semibold" size="md" opacity={100} lineClamp={1}>
            {product.title}
          </Text>
          <Text weight="semibold" size="sm" opacity={60}>
            {product.variants.length}{' '}
            {pluralize('Variant', product.variants.length)}
          </Text>
        </div>
      </div>
      <div className="space-x-3 flex justify-end">
        <Button type="button" size="sm" color="primary" onClick={handleLoad}>
          Load
        </Button>
        <Button type="button" size="sm" color="warning">
          Delete
        </Button>
      </div>
    </div>
  );
}
