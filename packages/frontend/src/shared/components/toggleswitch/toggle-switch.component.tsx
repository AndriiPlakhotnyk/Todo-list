import React from 'react';
import { Switch, Slider } from './toggle-switch.styles';

const ToggleSwitch: React.FC<{
	checked: boolean;
	onChange: (checked: boolean) => void;
}> = ({ checked, onChange }) => {
	return (
		<Switch checked={checked} onClick={() => onChange(!checked)}>
			<Slider checked={checked} />
		</Switch>
	);
};

export default ToggleSwitch;
