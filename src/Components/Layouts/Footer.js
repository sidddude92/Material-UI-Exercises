import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
function Footer({ muscles }) {
	const styles = {
		root: {
			flexGrow: 1
		}
	};

	return (
		<Paper className={styles.root}>
			<Tabs
				indicatorColor="primary"
				textColor="primary"
				scrollable
				scrollButtons="on"
				value={0}>
				<Tab label="All" />
				{muscles.map(muscle => (
					<Tab key={muscle} label={muscle} />
				))}
			</Tabs>
		</Paper>
	);
}

export default Footer;
