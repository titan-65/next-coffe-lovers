import { useRouter } from "next/router";

const CoffeeLoversLocation = ({ id }) => {
    const router = useRouter();
    console.log("router", router);
//   const { coffeeLovers } = router.query;

  return (
    <div>
      <h1>Coffee Lovers</h1>
      
    </div>
  );
}

export default CoffeeLoversLocation;