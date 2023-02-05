import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { deepPurple } from '@mui/material/colors';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {

    return (
        <Box
            conteiner
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            sx={{bgcolor:"none"}}
        >

            <Typography sx={{ fontSize: 56, color: "gray" }}>
                Ivan Semov
            </Typography>

            <Typography sx={{ fontSize: 24, width: 600, textAlign: "center" }}>
                I am an ambitious and motivated person, striving to achieve every goal I set for myself. I study everyday, aiming to become a full stack web developer. I have completed the SoftUni program for JS web developers. I also love reading books and Travel.
            </Typography>

            <Box sx={{mt:4}}>
                <Box display="flex">
                    <Button color="secondary" size="large" href="mailto: ivansemov44@gmail.com" target="_blank" sx={{ p: 1 }}>
                        <AttachEmailIcon sx={{ fontSize: 32, mt: -0.4, color: deepPurple[400] }} />
                    </Button>
                    <Typography sx={{ fontSize: 24 }}>
                        ivan.semov.44@gmail.com
                    </Typography>
                </Box>
                <Box display="flex">
                    <Button color="secondary" size="large" href="https://github.com/IvanSemov44" target="_blank" sx={{ p: 1 }}>
                        <GitHubIcon sx={{ fontSize: 32, mt: -0.6, color: deepPurple[400] }} />
                    </Button>
                    <Typography sx={{ fontSize: 24 }}>
                        github.com/IvanSemov44
                    </Typography>
                </Box>
                <Box display="flex">
                    <Button color="secondary" size="large" href="https://github.com/IvanSemov44" target="_blank" sx={{ p: 1 }}>
                        <PhoneForwardedIcon sx={{ fontSize: 32, mt: -0.6, color: deepPurple[400] }} />
                    </Button>
                    <Typography sx={{ fontSize: 24 }}>
                        +359 876 35 31 00
                    </Typography>
                </Box>
            </Box>

            <Box display="flex" sx={{ mt: 3 }}>
                <Box sx={{ mr: 10 }}>
                    <Typography sx={{ fontSize: 32, color: "gray" }}>
                        Education
                    </Typography>

                    <Typography sx={{fontSize:18}}>
                        2008 - 2013
                        Technology profile
                    </Typography>
                    <Typography sx={{ fontSize: 18 }}>
                        7-mo SOU
                        "Najden Gerov"
                    </Typography>
                    <Typography sx={{ fontSize: 18 }}>
                        SoftUni
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: 32, color: "gray" }}>
                        Language Skill
                    </Typography>
                    <Typography sx={{fontSize:18}}>
                        English Level: A2
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default About;