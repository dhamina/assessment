import { ExpButton } from "../ExpButton/ExpButton";

export const PriceCard = (props) => {
  const { title, duration, price, features, customColor } = props;
  return (
    <div className={`p__cd__cn ${customColor}`}>
      <p className="p__cd__cn__tle">{title}</p>
      <p className="p__cd__cn__sbtle">{duration}</p>
      <p className="p__cd__cn__dur">{price}</p>
      <p className="p__cd__cn__f">
      {features.map((r) => {
        return <span> ♩ {r}</span>
      })}
      </p>
      <ExpButton customClass={customColor} label="Select" />
      <style jsx>
        {`
        //    .p__cd__cn{
        //        padding: 10px 123px;
        //    }
          .p__cd__cn__tle {
            font: normal normal bold 42px/51px sans-serif;
            border-bottom: 1px solid;
            padding: 10px 0px;
            width: 130px;
                
          }
          .p__cd__cn__sbtle {
            font: normal normal bold 47px/57px sans-serif;
            padding: 20px 0px;
            margin:0px;
          }
          .p__cd__cn__dur {
            font: normal normal bold 134px/164px sans-serif;
            padding: 20px 0px;
            margin:0px;
          }
          .red {
            color: #d24848;
            margin:0px;
          }
          .yellow{
              color:#FFB33F;
          }
          .blue{
              color:#1FE1E9;
          }
          .p__cd__cn__f{
                  display: flex;
    flex-direction: column;
    color: white;
    font: normal normal normal 47px/64px sans-serif;
          }
        `}
      </style>
    </div>
  );
};
