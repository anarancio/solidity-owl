import configSetup from "./configLogic";
import listen from "./listenLogic";

export default [
    ...configSetup,
    ...listen
];