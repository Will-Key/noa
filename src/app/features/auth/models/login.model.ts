export interface FinalParamConnexion {
    param_session: ParamSession
    param_cnx: ParamConnexion
}

export interface ParamSession {
    session: string
}

export interface ParamConnexion {
    p_login: string
    p_mdp: string
}