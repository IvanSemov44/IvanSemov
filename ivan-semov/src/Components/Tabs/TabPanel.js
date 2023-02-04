import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import About from '../About/About';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Languages from '../Languages.js/Languages';
import Courses from '../Courses/Courses';
import { Avatar, Grid } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
        >
            <Grid conteiner display="flex">
                <Grid item sx={{ width: 300 }}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src={process.env.PUBLIC_URL + '/Canva@.PNG'}
                            sx={{ width: 200, height: 200, ml: 11, mt: 3, border: 4 }}
                            label="About" {...a11yProps(0)}
                        />
                        <Tab sx={{ m: 1, fontSize: 20, fontWeight: "bold", width: "1000px" }} label="About" {...a11yProps(1)} />
                        <Tab sx={{ m: 1, fontSize: 20, fontWeight: "bold", width: "1000px" }} label="Education" {...a11yProps(2)} />
                        <Tab sx={{ m: 1, fontSize: 20, fontWeight: "bold", width: "1000px" }} label="EXPERIENCE" {...a11yProps(3)} />
                        <Tab sx={{ m: 1, fontSize: 20, fontWeight: "bold", width: "1000px" }} label="SKILLS" {...a11yProps(4)} />
                        <Tab sx={{ m: 1, fontSize: 20, fontWeight: "bold", width: "1000px" }} label="LANGUAGES" {...a11yProps(5)} />
                        <Tab sx={{ m: 1, fontSize: 20, fontWeight: "bold", width: "1000px" }} label="Projects" {...a11yProps(6)} />
                        <Tab sx={{ m: 1, fontSize: 20, fontWeight: "bold", width: "1000px" }} label="COURSES" {...a11yProps(7)} />
                    </Tabs>
                </Grid>

                <Grid item sx={{ width: 500 }}>
                    <TabPanel value={value} index={1}>
                        <About />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Education />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Experience />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Skills />
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <Languages />
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        <Projects />
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                        <Courses />
                    </TabPanel>
                </Grid>
            </Grid>
        </Box>
    );
}

