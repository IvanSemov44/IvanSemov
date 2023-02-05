import { Button, Typography } from "@mui/material";
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Box } from "@mui/system";

const Courses = () => {
    return (
        <>
            <Box display="flex" sx={{ m: 3, mt: 7 }}>
                <Typography sx={{ fontSize: 40, color: "gray" }}>
                    <CardGiftcardIcon sx={{ fontSize: 40, color: "black", mr: 2, mb: -0.4 }} />
                    C# Fundamentals - January 2020
                </Typography>

                <Button
                    color="secondary"
                    size="large"
                    variant="outlined"
                    href="https://softuni.bg/certificates/details/80199/8cc5ad99"
                    target="_blank"
                    sx={{ ml: 3, borderRadius: 30 }}
                >
                    <CardMembershipIcon sx={{ mr: 1 }} />
                    Certificate
                </Button>
            </Box>

            <Box display="flex" sx={{ m: 3, mt: 7 }}>
                <Typography sx={{ fontSize: 40, color: "gray" }}>
                    <CardGiftcardIcon sx={{ fontSize: 40, color: "black", mr: 2, mb: -0.4 }} />
                    JS Advanced - September 2021
                </Typography>

                <Button
                    color="secondary"
                    size="large"
                    variant="outlined"
                    href="https://softuni.bg/certificates/details/114902/563ff1f3"
                    target="_blank"
                    sx={{ ml: 3, borderRadius: 30 }}
                >
                    <CardMembershipIcon sx={{ mr: 1 }} />
                    Certificate
                </Button>
            </Box>

            <Box display="flex" sx={{ m: 3, mt: 7 }}>
                <Typography sx={{ fontSize: 40, color: "gray" }}>
                    <CardGiftcardIcon sx={{ fontSize: 40, color: "black", mr: 2, mb: -0.4 }} />
                    JS Applications - February 2022
                </Typography>

                <Button
                    color="secondary"
                    size="large"
                    variant="outlined"
                    href="https://softuni.bg/certificates/details/131661/488898a3"
                    target="_blank"
                    sx={{ ml: 3, borderRadius: 30 }}
                >
                    <CardMembershipIcon sx={{ mr: 1 }} />
                    Certificate
                </Button>
            </Box>

            <Box display="flex" sx={{ m: 3, mt: 7 }}>
                <Typography sx={{ fontSize: 40, color: "gray" }}>
                    <CardGiftcardIcon sx={{ fontSize: 40, color: "black", mr: 2, mb: -0.4 }} />
                    HTML & CSS - May 2022
                </Typography>

                <Button
                    color="secondary"
                    size="large"
                    variant="outlined"
                    href="https://softuni.bg/certificates/details/136978/7bf380f7"
                    target="_blank"
                    sx={{ ml: 3, borderRadius: 30 }}
                >
                    <CardMembershipIcon sx={{ mr: 1 }} />
                    Certificate
                </Button>
            </Box>

            <Box display="flex" sx={{ m: 3, mt: 7 }}>
                <Typography sx={{ fontSize: 40, color: "gray" }}>
                    <CardGiftcardIcon sx={{ fontSize: 40, color: "black", mr: 2, mb: -0.4 }} />
                    React JS - June 2020
                </Typography>

                <Button
                    color="secondary"
                    size="large"
                    variant="outlined"
                    href="https://softuni.bg/certificates/details/140661/2fad9dfd"
                    target="_blank"
                    sx={{ ml: 3, borderRadius: 30 }}
                >
                    <CardMembershipIcon sx={{mr:1}}/>
                    Certificate
                </Button>
            </Box>
        </>
    )
}

export default Courses;