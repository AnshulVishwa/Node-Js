Hello Everyone this is my App which stores and perform tasks like TODO
JSON structure : {
    username : String,
    id : Number,
    tasks : [ "" , "" ],
    CompletedTasks : [ "" , "" ] ,
    RecentlyDeletedTask : String
}

as from above you can clearly see that this app
    ~ Stores username
    ~ Provides you a shortID
    ~ Can store multiple tasks 
    ~ Keeps a record of CompletedTasks
    ~ Stores the RecentlyDeletedTask

Routes :-
    # GET Route :
        ~ Get All the users ( "/" )
        ~ Get specific user using provided ID ( "/:id" )
        ~ Get all tasks of specific user ( "/task/:user" )
        ~ Get all completedTasks of specific user ( "/task/:user/completedTasks" )
        ~ Get the RecentlyDeletedTask of any user ( "/task/:user/delete )
    # Post Route :
        ~ Post new user
        ~ Post new task
        ~ Post new completed task
    # Patch Route :
        ~ Update any field in User details
    # Delete Route :
        ~ Delete the task
