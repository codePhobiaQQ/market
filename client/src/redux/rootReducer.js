import {combineReducers} from "redux";
import FeaturesSection from "../components/HomePage/FeaturesSection/FeaturesSection";
import {FeatureSectionReducer} from "./reducers/FeatureSectionReducer";
import {FirstSliderReducer} from "./reducers/FirstSliderReducer";
import {LatestProductsReducer} from "./reducers/LatestProductsReducer";
import {CardReducer} from "./reducers/CardReducer";
import {GlobalElementsReducer} from "./reducers/GlobalElementsReducer";

export const rootReducer = combineReducers({
  sliderFirst: FirstSliderReducer,
  featureReducer: FeatureSectionReducer,
  LatestProductsReducer,
  CardReducer,
  GlobalElementsReducer
})