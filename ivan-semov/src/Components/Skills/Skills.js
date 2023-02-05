import { Chip, TextField, Typography } from "@mui/material";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import { Box } from "@mui/system";

const Skills = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ml: 5,
            alignItems: "center",
            bgcolor:"none"
        }}>
            <Typography sx={{ fontSize: 32 }}>
                <MilitaryTechIcon sx={{ color: "blue", mr: 1, fontSize: 32, mb: -0.5 }} />
                Tech Skills
            </Typography>

            <Box>
                <Chip color="success" variant="outlined" label="HTML" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="success" variant="outlined" label="CSS" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="success" variant="outlined" label="JS" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="success" variant="outlined" label="C#" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="success" variant="outlined" label="T-SQL" sx={{ fontSize: 24, m: 1 }} />
            </Box>
            <Box>
                <Chip color="error" variant="outlined" label="Formik" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="error" variant="outlined" label="Yup" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="error" variant="outlined" label="Fontawesome" sx={{ fontSize: 24, ml: 1 }} />
            </Box>
            <Box>
                <Chip color="error" variant="outlined" label="MUI" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="error" variant="outlined" label="MVC" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="error" variant="outlined" label="SPA" sx={{ fontSize: 24, m: 1 }} />
            </Box>
            <Box>
                <Chip color="secondary" variant="outlined" label="React" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="secondary" variant="outlined" label="React-Router" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="secondary" variant="outlined" label="React-Hook-Form" sx={{ fontSize: 24, m: 1 }} />
            </Box>
            <Box>
                <Chip color="secondary" variant="outlined" label="React-Router-Bootstrap" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="secondary" variant="outlined" label="Bootstrap" sx={{ fontSize: 24, m: 1 }} />
            </Box>
            <Box>
                <Chip variant="outlined" label="MSSQL" sx={{ fontSize: 24, m: 1 }} />
                <Chip variant="outlined" label="LINQ" sx={{ fontSize: 24, m: 1 }} />
                <Chip variant="outlined" label="EF Core" sx={{ fontSize: 24, m: 1 }} />
                <Chip variant="outlined" label="OOP" sx={{ fontSize: 24, m: 1 }} />
                <Chip variant="outlined" label="ASP.NET Core" sx={{ fontSize: 24, m: 1 }} />
            </Box>
            <Box>
                <Chip color="primary" variant="outlined" label="Automapper" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="primary" variant="outlined" label="CQRS(MediatR)" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="primary" variant="outlined" label="JWT Bearer" sx={{ fontSize: 24, m: 1 }} />
            </Box>
            <Box>
                <Chip color="warning" variant="outlined" label="Moq" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="warning" variant="outlined" label="XUnit" sx={{ fontSize: 24, m: 1 }} />
                <Chip color="warning" variant="outlined" label="MSTest" sx={{ fontSize: 24, m: 1 }} />
            </Box>

            <Typography sx={{ fontSize: 32, mt: 3, mb: 2 }}>
                <SyncAltOutlinedIcon sx={{ color: "blue", mr: 1, fontSize: 32, mb: -0.5 }} />
                Soft Skills
            </Typography>


            <TextField
                sx={{ size: 32, width: 124 }}
                disabled
                value="A TEAM PLAYER"
                variant="standard"
            />
            <TextField
                sx={{ size: 32, width: 280 }}
                disabled
                value="HAS GOOD COMMUNICATION SKILLS"
                variant="standard"
            />

            <TextField
                sx={{ size: 32, width: 445 }}
                disabled
                value="HAS THE ABILITY TO ESTABLISH AND MAINTAIN EFFECTIVE"
                variant="standard"
            />

            <TextField
                sx={{ size: 32, width: 460 }}
                disabled
                value="WORKING RELATIONSHIPS WITH CLIENTS AND COLLEAGUES"
                variant="standard"
                color="warning"
            />

        </Box>
    )
}

export default Skills;