import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  ADD_TICKET_START,
  ADD_TICKET_SUCCESS,
  ADD_TICKET_FAIL,
  EDIT_TICKET_START,
  EDIT_TICKET_SUCCESS,
  EDIT_TICKET_FAIL,
  DELETE_TICKET_START,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_RESOLVED,
  RESOLVE_TICKET_START,
  RESOLVE_TICKET_SUCCESS,
  RESOLVE_TICKET_FAIL,
  ASSIGN_TICKET_START,
  ASSIGN_TICKET_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_RESOLVED,
  // GET_USER,
  // GET_USER_FAIL,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PRIORITIES_SUCCESS,
  FETCH_STATUS_SUCCESS,

} from "../actions/actions";

const initialState = {
  errorStatusCode: null,
  fetchingData: false,
  isLoggingIn: false,
  isLoggedIn: false,
  isSigningUp: false,
  creatingTicket: false,
  updatingTicket: false,
  resolvingTicket: false,
  deletingTicket: false,
  status: null,
  error: null,
  credentials: [],

  users: [],
  user: {
    user_id: "",
    cohort: null,
    email: "",
    role: "",
    username: ""
  },

  categories: [{id:1, category:"None"}, 
  {id:2, category:"React"}, 
  {id:3, category:"JavaScript"}, 
  ],
  tickets: [],
  isAdmin: false,


// priorities: [],
// priorities

// statusList: [], 
};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingData: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        tickets: action.payload
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    case ADD_TICKET_START:
      return {
        ...state,
        error: "",
        creatingTicket: true
      };
    case ADD_TICKET_SUCCESS:
      return {
        ...state,
        creatingTicket: false,
        tickets: [...state.tickets, action.payload]
      };
    case ADD_TICKET_FAIL:
      return {
        ...state,
        creatingTicket: false,
        error: action.payload
      };
    case DELETE_TICKET_START:
      return {
        ...state,
        error: "",
        deletingTicket: true
      };
    case DELETE_TICKET_SUCCESS:
      return {
        ...state,
        deletingTicket: false,
        tickets: action.payload
      };
    case DELETE_TICKET_FAIL:
      return {
        ...state,
        deletingTicket: false,
        error: action.payload
      };
    case EDIT_TICKET_START:
      return {
        ...state,
        error: "",
        updatingTicket: true
      };
    case EDIT_TICKET_SUCCESS:
      return {
        ...state,
        tickets: state.tickets.map(ticket => {
          if (Number(ticket.id) === Number(action.id)) {
            ticket = action.payload;
          }
          return ticket;
        })
      };
    case EDIT_TICKET_FAIL:
      return {
        ...state,
        updatingTicket: false,
        error: action.payload
      };
    case LOGIN_START: {
      return {
        ...state,
        isLoggingIn: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        user: action.user,
        status: action.status,
        error: action.message
      };
    }
    case LOGIN_RESOLVED: {
      return {
        ...state,
        isLoggingIn: false,
        status: null,
        error: null
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload,
        status: action.status
      };
    }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      };
    case SIGNUP_START: {
      return {
        ...state,
        isSigningUp: true
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        error: action.payload,
        status: action.status
        // user: action.user
      };
    }
    case SIGNUP_RESOLVED: {
      return {
        ...state,
        isSigningUp: false,
        error: null,
        status: null
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        isSigningUp: false,
        error: action.payload
      };
    }
    case RESOLVE_TICKET_START:
      const editTicket = state.tickets.map(ticket => {
        if (Number(ticket.id) === Number(action.id)) {
          ticket.resolved = !ticket.resolved;
        }
        return ticket;
      });
      return {
        ...state,
        tickets: editTicket
      };
    case RESOLVE_TICKET_SUCCESS:
      return {
        ...state,
        tickets: [...state.ticket, action.payload]
      };
    case RESOLVE_TICKET_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case ASSIGN_TICKET_START:
      const assignedTicket = state.tickets.map(ticket => {
        if (Number(ticket.id) === Number(action.id)) {
          ticket.assigned = !ticket.assigned;
          ticket.assigned_user = state.user.user_id;
          if (!ticket.assigned) {
            ticket.assigned_user = "";
          }
        }
        return ticket;
      });
      return {
        ...state,
        tickets: assignedTicket
      };
    case ASSIGN_TICKET_FAIL:
      return {
        ...state,
        error: action.payload
      };

     case FETCH_CATEGORIES_SUCCESS:
       console.log(action.payload)
       return {
         ...state,
         categories: action.payload.categories
       };
      case FETCH_PRIORITIES_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          priority_level: action.payload.priority_level
        };
      case FETCH_STATUS_SUCCESS:
          console.log(action.payload)
          return {
            ...state,
            statusList: action.payload.statusList
          };
    default:
      return state;
  }
};

export default reducers;
