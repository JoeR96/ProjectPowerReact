import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import Button from "../Common/Button";

function Reactdnd1(exercises, ref) {
  const numberOfWorkoutDays = 4;
  const workoutColumns = {
    unassigned: {
      items: [],
    },
  };

  for (let index = 0; index < numberOfWorkoutDays; index++) {
    var objectToAdd = {
      day: index + 1,
      items: [],
    };

    workoutColumns[index] = objectToAdd;
  }

  const [active, setActive] = useState(false);
  const [columns, setColumns] = useState(workoutColumns);
  const [index, setIndex] = useState(0);

  function updateColumns(val) {
    console.log(val);

    setColumns((cols) => {
      var filtered = [];

      for (let day = 0; day < columns.length; day++) {
        const exercises = columns[index];

        for (let exercise = 0; exercise < exercises.length; exercise++) {
          const e = exercises[exercise];
          if (typeof e === "object") {
            filtered.push(e);
          }
        }
      }

      for (let index = 0; index < cols.unassigned.items.length; index++) {
        const element = cols.unassigned.items[index];
        if (typeof element === "object") {
          filtered.push(element);
        }
      }

      return index < 1
        ? { ...cols, unassigned: [val] }
        : { ...cols, unassigned: [...filtered, val] };
    });
    setIndex((index) => index + 1);
    if (!active) {
      setActive(true);
    }
  }
  useImperativeHandle(ref, () => ({
    setFromOutside(msg) {
      updateColumns(msg);
    },
  }));

  useEffect(() => { }, [columns]);
  function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }

  const onDragEnd = (result, columns, setColumns) => {
    console.log(result);
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {


      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const x = source.index;
      const y = destination.index;
      const [removed] = sourceItems.splice(source.index, 1);


      destItems.splice(destItems.index, 0, removed);
      arraymove(destItems, y, x)

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);


      copiedItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  function columnCheck(column) {
    if (column.length > 0) {
      column.items = [...column];
      return true;
    }
    return typeof column.items === "undefined" ? false : true;
  }
  var arr = [];
  function updateLiftDayAndOrder() {
    if (columns.unassigned.items.length > 0) {
      throw "unassigned exercises remain!";
    }
    const ex = Object.values(columns);

    for (let index = 0; index < numberOfWorkoutDays; index++) {
      var objectToAdd = { exercises: Object.values(ex[index].items) };
      arr[index] = objectToAdd;
    }

    const exerciseDaysAndOrders = { exerciseDaysAndOrders: arr };

    axios.post(
      "https://localhost:44317/A2SWorkout/Create",
      exerciseDaysAndOrders
    );
  }

  if (!active) {
    return <div></div>;
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          if (!columnCheck(column)) {
            return <div></div>;
          } else {
            return (
              <div
                styles={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>{parseInt(id) + 1}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={id} key={id}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          x={{ borderColor: "primary.main" }}
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 5,
                            width: 200,
                            minHeight: 450,
                            borderBlockStart: 4,
                          }}
                        >
                          {column.items.map((item, index) => {
                            console.log(item);
                            if (
                              column.items.length < 1 ||
                              typeof item === "undefined"
                            ) {
                              return <div></div>;
                            } else {
                              return (
                                <Draggable
                                  key={item.uniqueId}
                                  draggableId={item.uniqueId}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                            ? "#263B4A"
                                            : "#ff9800",
                                          color: "white",
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        {item.name}
                                        <div></div>
                                        {item.category}
                                        <div></div>
                                        {item.TrainingMax + ' KG'}
                                        <div></div>
                                        {'Sets ' + item.sets}
                                        <div></div>
                                        {'Reps ' + item.reps}
                                        <div></div>
                                        {'Rep increase ' + item.repIncrease}
                                        <div></div>
                                        {item.template}
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            }
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          }
        })}
      </DragDropContext>
      {/* <Button
        onClick={updateLiftDayAndOrder}
        id="redirectToReferrer"
        type="submit"
        color="dark grey"
        className="form__custom-button"
      >
        Submit
      </Button> */}
    </div>
  );
}

export default forwardRef(Reactdnd1);
