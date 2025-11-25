// src/components/QAField.jsx
import { Box, TextField, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function QAField({ index, qa, onChange, onDelete }) {
  return (
    <Box display="flex" gap={2} my={2}>
      <TextField
        label="Question"
        fullWidth
        value={qa.question}
        onChange={(e) => onChange(index, "question", e.target.value)}
      />
      <TextField
        label="Answer"
        fullWidth
        value={qa.answer}
        onChange={(e) => onChange(index, "answer", e.target.value)}
      />
      <IconButton color="error" onClick={() => onDelete(index)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}
