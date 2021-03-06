import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useContext,
} from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SimpleAccordion from "../Common/Accordion";
import DayAndLiftOrderContext from "../ScaffoldA2SExerciseForm/DayAndLiftOrderContext"
import UpdateLiftDayAndOrderContext from "../ScaffoldA2SExerciseForm/UpdateDayAndLiftOrderContext";
import Button from "mui-button";
function Reactdnd1(exercises, ref) {
  const submit = useContext(UpdateLiftDayAndOrderContext)

  const numberOfWorkoutDays = 5;
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
    setFromOutside(msg, uuid) {

      var newObj = { ...msg, uniqueId: uuid }
      updateColumns(newObj);
      return columns;
    },
  }));

  useEffect(() => {
    submit(columns);
  }, [columns]);
  function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  
  }

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      var sourceColumn = columns[source.droppableId];
      var destColumn = columns[destination.droppableId];
      var sourceItems = [...sourceColumn.items];
      var destItems = [...destColumn.items];
      var [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);


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
                                        <SimpleAccordion
                                          item={item}
                                          disableGutters elevation={0}
                                        ></SimpleAccordion>
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
    </div>
  );
}

export default forwardRef(Reactdnd1);
