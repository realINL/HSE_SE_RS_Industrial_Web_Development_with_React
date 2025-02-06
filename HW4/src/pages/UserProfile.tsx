import React from "react";
import { Box, Typography, Avatar, Paper } from "@mui/material";


const user = {
    name: "Илья Лебедев",
    email: "inlebedev@edu.hse.ru",
    group: "Студент"
};

function stringAvatar(name: string) {
    return `${name.split(' ')[0][0]}`;
}

const UserProfile: React.FC = () => {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: 4,
            }}
        >
            <Paper
                sx={{
                    padding: 4,
                    borderRadius: 4,
                    width: "100%",
                    maxWidth: 400,
                    boxShadow: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar
                    sx={{ bgcolor: "#007bff", width: 120, height: 120, marginBottom: 2, fontSize: 50 }}
                    children={stringAvatar(user.name)}
                />

                <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                    {user.name}
                </Typography>

                <Typography variant="body1" sx={{ color: "text.secondary", marginBottom: 2 }}>
                    {user.email}
                </Typography>

                <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                    Группа: {user.group}
                </Typography>

            </Paper>
        </Box>
    );
};

export default UserProfile;
