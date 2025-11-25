import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import QAField from "../components/QAField";
import { createRecord } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function CreateRecord() {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [qaList, setQaList] = useState([{ question: "", answer: "" }]);
  const navigate = useNavigate();

  const updateQA = (index, key, value) => {
    const copy = [...qaList];
    copy[index][key] = value;
    setQaList(copy);
  };

  const deleteQA = (index) => {
    const copy = qaList.filter((_, i) => i !== index);
    setQaList(copy);
  };

  const addQA = () => setQaList([...qaList, { question: "", answer: "" }]);

  const save = async () => {
    await createRecord({
      employeeId,
      employeeName,
      qa: qaList,
    });
    navigate("/dashboard");
  };

  return (
    <Box sx={{ width: 600, margin: "40px auto" }}>
      <Typography variant="h4" mb={3}>Create Feedback Record</Typography>

      <TextField
        label="Employee ID"
        fullWidth
        margin="normal"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />

      <TextField
        label="Employee Name"
        fullWidth
        margin="normal"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />

      <Typography mt={3} variant="h6">Questions & Answers</Typography>

      {qaList.map((qa, idx) => (
        <QAField
          key={idx}
          index={idx}
          qa={qa}
          onChange={updateQA}
          onDelete={deleteQA}
        />
      ))}

      <Button variant="outlined" onClick={addQA}>Add</Button>

      <Button variant="contained" sx={{ mt: 3 }} onClick={save}>
        Save
      </Button>
    </Box>
  );
}
