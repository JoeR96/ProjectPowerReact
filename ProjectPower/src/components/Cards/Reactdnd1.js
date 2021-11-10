import React,{useState,useEffect} from 'react'
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd'
import axios from 'axios';
import Button from '../Common/Button'
function Reactdnd1(exercises) {
    //fetch user workout days from db
    const numberOfWorkoutDays = 4;
    const workoutColumns = {
            unassigned: {
                items: []
            }
        }
    for (let index = 0; index < numberOfWorkoutDays; index++) {
        var objectToAdd={
            day: index + 1,
            items:[]
        }
        
        workoutColumns[index] = objectToAdd 
    }
    const [isLoading,setIsLoading] = useState(true)
    const [columns,setColumns] = useState(workoutColumns)
    const [data, setData] = React.useState([]);
    

    const onDragEnd = (result, columns, setColumns) => {
        if(!result.destination) return;
        const {source,destination} = result;
        if(source.droppableId !== destination.droppableId){
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index,1);
            destItems.splice(destItems.index,0,removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items:sourceItems
                },
                [destination.droppableId]:{
                    ...sourceColumn,
                    items:destItems
                }
            })
        }
        else
        {
             const column = columns[source.droppableId];
            const copiedItems = [...column.items]
            const [removed] = copiedItems.splice(source.index,1);
            copiedItems.splice(destination.index,0,removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items:copiedItems
                }
            })
        }
       
    }
    useEffect(() => {
        
            async function GetData(){
                var username = localStorage.getItem("username").toString()
                var x = await axios.get('https://localhost:44317/A2SWorkout/UnassignedExercises?Term='+username)          
                return x  
                };

            const fetchData = async () => {
            const res = await GetData(); 
            setData(res)
            workoutColumns.unassigned.items = res.data
            console.log(workoutColumns.unassigned.items)
            setIsLoading(false)
            console.log(columns)
                     }
            fetchData();
            
            
    }, []);

var arr = []
 function updateLiftDayAndOrder(){
        if(columns.unassigned.items.length > 0)
        {
            throw 'unassigned exercises remain!'
            
        }
        const ex = Object.values(columns)
    
        for (let index = 0; index < numberOfWorkoutDays; index++) {
            var objectToAdd={exercises : Object.values(ex[index].items)
            }
            arr[index] = objectToAdd     
        }

        const exerciseDaysAndOrders = {exerciseDaysAndOrders:arr}
        axios.post('https://localhost:44317/A2SWorkout/UpdateDayAndPriority',exerciseDaysAndOrders)
    }

    if(isLoading)
    {
    return (
        <div>
            hello
        </div>
    );
    }
    if(!isLoading)
    {
        return(
        
        <div style={{display: 'flex',justifyContent:'center',height:'100%'}}>
            <DragDropContext onDragEnd={result => onDragEnd(result,columns,setColumns)}>
                {Object.entries(columns).map(([id, column]) =>{
                    return(
                        <div styles ={{display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
                            <h2>{id}</h2> 
                              <div style={{margin: 8}}>
                                <Droppable droppableId={id} key={id} >
                                    
                                    {(provided,snapshot) => {
                                        return(
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver ? 'lightblue' :'lightgrey',
                                                    padding: 4,
                                                    width: 250,
                                                    minHeight: 500
                                                }}
                                            >
                                                {column.items.map((item,index) => {
                                                    return(
                                                        <Draggable key={item.uniqueId} draggableId={item.uniqueId} index={index}>
                                                            {(provided,snapshot) => {
                                                                return (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            userSelect: 'none',
                                                                            padding: 16,
                                                                            margin: '0 0 8px 0',
                                                                            minHeight: '50px',
                                                                            backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                                            color: 'white',
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                    >
                                                                        {item.exerciseName}
                                                                        {item.uniqueId}
                                                                    </div>
                                                                )
                                                            }}
                                                        </Draggable>
                                                    )
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    )
                })}
            </DragDropContext>
            <Button onClick={
    updateLiftDayAndOrder
    }  id="redirectToReferrer" type="submit" color="primary" className="form__custom-button">
                    Log in
                </Button>
        </div>
    )
    }
    
}

export default Reactdnd1
