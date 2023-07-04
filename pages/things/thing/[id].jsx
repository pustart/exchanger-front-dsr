import React from "react";
import { useRouter } from "next/router";
import withDefaultLayout from "../../../src/layouts/Default/DefaultLayout";
import OneThingPage from "../../../src/components/templates/CommonPages/OneThingPage/OneThingPage";
import { THINGS } from "../../../src/constants/mocks";

function ThingId({ things }) {
  const router = useRouter();
  const { id } = router.query;
  return <OneThingPage id={id} thing={things[id - 1]} />;
}

export async function getServerSideProps() {
  const things = THINGS.map(thing => ({ ...thing }));

  return {
    props: {
      things,
    },
  };
}

export default withDefaultLayout(ThingId);
