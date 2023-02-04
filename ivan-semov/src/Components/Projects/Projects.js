import { Grid } from "@mui/material";

const Projects = () => {
    return (
        <Grid conteiter display="flex">
            <Grid item>
                <img
                    src={process.env.PUBLIC_URL + '/UltimateMovie.jpg'}
                    alt="UltimateMovie.jpg"
                    style={{ height: 200, width: 200 }} />
            </Grid>
            <Grid item>
                <img
                    src={process.env.PUBLIC_URL + '/IvanRealEstate.PNG'}
                    alt="UltimateMovie.jpg"
                    style={{ height: 200, width: 200 }} />
            </Grid>
        </Grid>
    )
}

export default Projects;