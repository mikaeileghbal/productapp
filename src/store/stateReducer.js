import { initialData } from "./initialData";
import {
  STATE_EDNT_EDITING,
  STATE_START_CREATING,
  STATE_START_EDITING,
} from "./stateActions";

export default function stateReducer(stateData, action) {
  switch (action.type) {
    case STATE_START_CREATING:
    case STATE_START_EDITING:
      return {
        ...stateData,
        editing: true,
        selectedId:
          action.type === STATE_START_EDITING ? action.payload.id : -1,
        selectedType: action.dataType,
      };
    case STATE_EDNT_EDITING:
      return {
        ...stateData,
        editing: false,
      };
    default:
      return stateData || initialData.stateData;
  }
}
