import React, { useReducer, useRef } from "react";

const initState = {
  job: "",
  jobs: [],
};

type PayLoadType = {
  type: string;
  payload: object;
};

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload: PayLoadType | "") => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload: PayLoadType) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload: PayLoadType) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

const reducer = (state: any, action: { type: string; payload: any }) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action?.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs,
      };
      break;

    default:
      throw new Error("invalid action");
  }
  console.log(newState);
  return newState;
};

const TodoLists = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef();
  const { job, jobs } = state;

  const handleSubmit = () => {
    console.log("submit");
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div>
      TodoLists
      <input
        value={job}
        ref={inputRef}
        placeholder="Enter new job"
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add Job</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            {job}{" "}
            <span
              onClick={() => {
                dispatch(deleteJob(index));
              }}
              style={{
                cursor: "pointer",
                marginInline: "10px",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;
