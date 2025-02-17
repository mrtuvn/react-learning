import { useAppSelector, useAppDispatch } from "@/hooks";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IRootState } from "@/types";
import { UPDATE_LEADER_BOARD } from "@/redux/slices/leaderboard/leaderboardSlice";
import { RESET_SCORE } from "@/redux/slices/question/questionSlice";
import { paths } from "@/routes/path";

interface IFormInput {
  first_name: string;
  last_name: string;
  email: string;
}
const FinalScore = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const score = useAppSelector((state: IRootState) => state.question.score);

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { first_name, last_name, email } = data;

    const item = {
      id: Date.now(),
      first_name,
      last_name,
      email,
      score,
    };

    dispatch(UPDATE_LEADER_BOARD(item));
    setTimeout(() => {
      dispatch(RESET_SCORE());
      navigate(paths.PATH_LEADER_BOARD);
    });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ width: "100%", mb: "30px" }}>
        <Typography variant="h3">FinalScore: {score}</Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  autoFocus
                  margin="dense"
                  id="first_name"
                  label="First Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  error={errors.first_name ? true : false}
                  {...register("first_name", { required: true })}
                  {...field}
                />
              );
            }}
          />

          <Controller
            name="last_name"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  autoFocus
                  margin="dense"
                  id="last_name"
                  label="Last Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  error={errors.last_name ? true : false}
                  {...register("last_name", { required: true })}
                  {...field}
                />
              );
            }}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  error={errors.email ? true : false}
                  {...register("email", { required: true })}
                  {...field}
                />
              );
            }}
          />
        </Box>

        <Box>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default FinalScore;
