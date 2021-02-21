import {combineReducers} from "redux";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import {FeatureSectionReducer} from "./reducers/FeatureSectionReducer";
import {FirstSliderReducer} from "./reducers/FirstSliderReducer";

export const rootReducer = combineReducers({
  sliderFirst: FirstSliderReducer,
  featureReducer: FeatureSectionReducer
})