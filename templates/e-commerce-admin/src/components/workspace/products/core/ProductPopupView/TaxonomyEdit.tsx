import React, { useState } from 'react'
import { CompWrapper } from './CompWrapper'
import { Field, FieldGroup, FieldLabel, ComboboxMultiple } from '@fluctux/ui'

import { DUMMY_PRODUCT_BRANDS, DUMMY_PRODUCT_CATEGORIES, DUMMY_PRODUCT_TAGS } from '@/constants'
import type { MenuDataType } from '@fluctux/types'



export const TaxonomyEdit = () => {
  const [selectedCategories, setSelectedCategories] = useState<MenuDataType[]>([])
  const [selectedTags, setSelectedTags] = useState<MenuDataType[]>([]);
const [selectedBrands, setSelectedBrands] = useState<MenuDataType[]>([]);
  return (
    <CompWrapper title='Taxonomy'>
      <FieldGroup>
        <Field>
          <FieldLabel>Category</FieldLabel>
          <ComboboxMultiple onRemoveAllAddedData={() => setSelectedCategories([])} selectedValues={selectedCategories} onValueAdd={value => setSelectedCategories(value as any)} items={DUMMY_PRODUCT_CATEGORIES}  />
        </Field>
         <Field>
          <FieldLabel>Tag</FieldLabel>
          <ComboboxMultiple onRemoveAllAddedData={() => setSelectedTags([])} selectedValues={selectedTags} onValueAdd={value => setSelectedTags(value as any)} items={DUMMY_PRODUCT_TAGS}  />
        </Field>
          <Field>
          <FieldLabel>Brand</FieldLabel>
          <ComboboxMultiple onRemoveAllAddedData={() => setSelectedBrands([])} selectedValues={selectedBrands} onValueAdd={value => setSelectedBrands(value as any)} items={DUMMY_PRODUCT_BRANDS}  />
        </Field>
      </FieldGroup>
    </CompWrapper>
  )
}


