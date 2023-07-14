import { BrandStyles } from "./styles";
import brand from '../../assets/brand.png';
import classes from '../../App.module.css';

const Brand = () => {
    return (
        <BrandStyles>
            <img className={classes.brand} src={brand} alt="Brand of Clinic" />
            <h1 className={classes['title-brand']}>Clinic</h1>
        </BrandStyles>
    )
};

export default Brand;