import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function Footer({ muscles, onSelect, category }) {
	const index = category
		? muscles.findIndex(group => group === category) + 1
		: 0;

	const styles = {
		root: {
			flexGrow: 1
		}
	};

	const onIndexSelected = (e, index) => {
		onSelect(index === 0 ? "" : muscles[index - 1]);
	};

	return (
		<Paper className={styles.root}>
			<Tabs
				indicatorColor="primary"
				textColor="primary"
				centered
				value={index}
				onChange={onIndexSelected}>
				<Tab label="All" />
				{muscles.map(muscle => (
					<Tab key={muscle} label={muscle} />
				))}
			</Tabs>
		</Paper>
	);
}

export default Footer;
