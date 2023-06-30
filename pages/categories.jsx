import React from 'react';
import withDefaultLayout from '../src/layouts/Layout';
import Category from '../src/components/modules/Category/Category';
import CategoryAdd from '../src/components/modules/CategoryAdd/CategoryAdd';
import { CATEGORIES } from '../src/constants/mocks';

function Categories() {
  return (
    <>
      <CategoryAdd></CategoryAdd>
      {
        CATEGORIES.map((category, index) => (
          <Category key={index} title={category.title} amount={category.amount}></Category>
        ))
      }
    </>
  );
}

export default withDefaultLayout(Categories);
