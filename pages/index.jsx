import React from 'react';
import Button from "../src/components/elements/Button/Button"
import Link from '../src/components/elements/Link/Link';
import Header from '../src/components/modules/Header/Header';
export default function Home() {
  return (
    <>
    <Header></Header>
    <h1>
      Привет мир!
    </h1>
      <Button appearance="outlined">
      Кликни на меня
    </Button>
      <Button appearance="text">
        Кликни на меня
      </Button>
      <Button>
        Кликни на меня
      </Button>
      <Link>О нас</Link>
    </>
  );
}
