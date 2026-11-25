import App0 from './lab/apps/PowerOps.jsx';
import App1 from './lab/apps/InfraPilot.jsx';
export const apps = [{ ...{"id":"powerops","name":"PowerOps","area":"Power distribution","description":"Review rack demand and phase balance, then safely exercise the simulated outlet control workflow.","simulation":true}, Application: App0 }, { ...{"id":"infrapilot-ai","name":"InfraPilot AI","area":"Operations automation","description":"Ask operational questions, inspect structured tool output, and approve an incident handoff.","simulation":true}, Application: App1 }];
export const primary = apps[0];
