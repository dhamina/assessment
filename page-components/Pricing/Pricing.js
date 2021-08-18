import { Footer } from "../../component/Footer/Footer";
import { PriceCard } from "../../component/PriceCard/PriceCard";

export const Pricing = () => {
  return (
    <div className="p__cn">
      <p className="p__tle">PRICING</p>
      <p className="p__sbtle">
        Test out our app today! Choose from three subscription Based payment
        models.
      </p>
      <div className="p__crd__cn">
        <PriceCard
          title="BASIC"
          duration="MONTHLY"
          price="$9"
          features={[
            "Very good",
            "Amazing",
            "Perfect job",
            "Love this ",
            "It’s so good",
            "Features",
          ]}
          customColor="red"
        />
        <PriceCard
          title="BASIC"
          duration="MONTHLY"
          price="$9"
          features={[
            "Very good",
            "Amazing",
            "Perfect job",
            "Love this ",
            "It’s so good",
            "Features",
          ]}
          customColor="blue"
        />
        <PriceCard
          title="BASIC"
          duration="MONTHLY"
          price="$9"
          features={[
            "Very good",
            "Amazing",
            "Perfect job",
            "Love this ",
            "It’s so good",
            "Features",
          ]}
          customColor="yellow"
        />

      </div>

      <style jsx>
        {`
          .p__cn {
            position: absolute;
            top: 0;
            background: black;
            width: 100%;
            padding: 202px 130px;
          }
          .p__tle {
            color: white;
            font: normal normal bold 74px/90px Helvetica Neue;
            font-family: sans-serif;
          }
          .p__sbtle {
            font: normal normal normal 51px/80px Helvetica Neue;
            color: white;
            font-family: sans-serif;
          }
          .p__crd__cn {
            display: grid;
            column-gap: 200px;
            grid-template-columns: 21% 21% 21%;
          }
        `}
      </style>
    </div>
  );
};
