import { useEffect, useState } from "react";
import { Box, Button, Typography, List, ListItem, ListItemButton } from "@mui/material";
import { getRecords } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  // ⬇️ Move load ABOVE useEffect
  useEffect(() => {
  const load = async () => {
    try {
      const res = await getRecords();
      setRecords(res.data);
    } catch (error) {
      console.error("Error fetching records", error);
    }
  };

    load();
    }, []);
      

  return (
    <Box sx={{ width: 600, margin: "40px auto" }}>
      <Typography variant="h4" mb={3}>Feedback Records</Typography>

      <Button variant="contained" onClick={() => navigate("/create")}>
        Create New Record
      </Button>

      {records.length === 0 ? (
        <Typography mt={3}>
          No feedback records yet. Click “Create New Record” to add one.
        </Typography>
      ) : (
        <List>
          {records.map((r) => (
            <ListItem key={r.id}>
              <ListItemButton onClick={() => navigate(`/record/${r.id}`)}>
                {r.employeeName} — {r.employeeId}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
