import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { getRecord } from "../api/api";
import { useParams, useNavigate } from "react-router-dom";

export default function ViewRecord() {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const navigate = useNavigate();

 useEffect(() => {
  const load = async () => {
    const res = await getRecord(id);
    setRecord(res.data);
  };

  load();
}, [id]);

  if (!record) return "Loading...";

  return (
    <Box sx={{ width: 600, margin: "40px auto" }}>
      <Typography variant="h4" mb={3}>View Feedback Record</Typography>

      <Typography><b>Employee ID:</b> {record.employeeId}</Typography>
      <Typography><b>Employee Name:</b> {record.employeeName}</Typography>

      <Typography mt={3} variant="h6">Q/A</Typography>

      {record.qa.map((q, idx) => (
        <Box key={idx} my={2}>
          <Typography><b>Q:</b> {q.question}</Typography>
          <Typography><b>A:</b> {q.answer}</Typography>
        </Box>
      ))}

      <Button variant="contained" sx={{ mt: 3 }} onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </Button>
    </Box>
  );
}
