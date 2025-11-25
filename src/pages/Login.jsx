// import { useState } from "react";
// import { Box, TextField, Button, Typography } from "@mui/material";
// import { login } from "../api/api";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     try {
//       await login({ userId, password });
//       navigate("/dashboard");
//     } catch {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <Box sx={{ width: 350, margin: "80px auto" }}>
//       <Typography variant="h4" mb={2}>Manager Login</Typography>

//       <TextField
//         label="User Id"
//         fullWidth
//         margin="normal"
//         value={userId}
//         onChange={(e) => setUserId(e.target.value)}
//       />

//       <TextField
//         label="Password"
//         type="password"
//         fullWidth
//         margin="normal"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       {error && <Typography color="error">{error}</Typography>}

//       <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Box>
//   );
// }

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { login } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

//   const handleSubmit = async () => {
//     try {
//       await login({ userId, password });
//       navigate("/dashboard");
//     } catch {
//       setError("Invalid credentials");
//     }
//   };

const handleSubmit = async () => {
  try {
    const res = await login({ userId, password });
    console.log("LOGIN SUCCESS:", res.data);
    navigate("/dashboard");
  } catch (err) {
    console.log("LOGIN ERROR:", err);
    setError("Invalid credentials");
  }
};


  return (
    <Box
    sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 2,
    }}

    >
      <Paper
        elevation={6}
        sx={{
          width: 420,
          padding: 4,
          borderRadius: 3,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" mb={3} textAlign="center" fontWeight={600}>
          Manager Login
        </Typography>

        <TextField
          label="User ID"
          fullWidth
          margin="normal"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography color="error" sx={{ mt: 1, fontSize: 14 }}>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            paddingY: 1.2,
            fontSize: "16px",
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
}
