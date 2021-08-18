export const Perks = () => {
  return (
    <div className="p__cn">
      <p className="p__tle">PERKS</p>

      <div className="p__crd__cn">
        <div>
          <p className="p__crd__cn__t">Subscription Payment Model</p>
          <p className="p__crd__cn__sbt">
            No commitment, cancel anytime. Never worry about forgetting a
            payment again!
          </p>
        </div>
        <div>
          <p className="p__crd__cn__t">No Fee Cancelation Policy</p>
          <p className="p__crd__cn__sbt">
            No commitment, cancel anytime. Never worry about forgetting a
            payment again!
          </p>
        </div>
        <div>
          <p className="p__crd__cn__t">Subscription Payment Model</p>
          <p className="p__crd__cn__sbt">
            No commitment, cancel anytime. Never worry about forgetting a
            payment again!
          </p>
        </div>
      </div>

      <style jsx>
        {`
          .p__cn {
            position: absolute;
            top: 0;
            background: #d34848;
            width: 100%;
            padding: 202px 130px;
          }
          .p__tle {
            color: white;
            font: normal normal bold 74px/90px Helvetica Neue;
            font-family: sans-serif;
            margin: 20px 0px;
          }
          .p__sbtle {
            font: normal normal normal 51px/80px Helvetica Neue;
            color: white;
            font-family: sans-serif;
          }
          .p__crd__cn {
            display: grid;
            column-gap: 92px;
            grid-template-columns: 28% 28% 28%;
          }
          .p__crd__cn__t {
            font: normal normal bold 51px/62px sans-serif;
            letter-spacing: 5.1px;
            color: white;
             border-top: 5px solid white;
            width: 213px;
            padding-top: 18px;
            
          }
        //   .border{
        //       border-top: 5px solid white;
        //     width: 136px;
        //     padding-top: 18px;
        //   }
          .p__crd__cn__sbt {
            font: normal normal normal 35px/41px sans-serif;
            letter-spacing: 3.5px;
            color: #0b0b0b;
          }
        `}
      </style>
    </div>
  );
};
