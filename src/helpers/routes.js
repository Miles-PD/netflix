import React from "react";
import { Route, Navigate } from "react-router-dom";

export function IsUserRedirect({user, loggedInPath, children, ...rest}) {
    <Route
        {...rest} 
        element={() => {
            if (!user) {
                return children
            }

            if (user) {
                return (
                    <Navigate replace to={{pathName: loggedInPath}}/>
                )
            }
                return null
        }
    }/>
}

export function ProtectedRoute({user, children, ...rest}) {
    return (
        <Route
            {...rest}
            element={({location}) => {
                if (user) {
                    return children
                }

                if (!user) {
                    <Navigate replace to={{
                        pathname: 'signin',
                        state: {from: location}
                        }}
                    />
                }
            }}
        />
    )
}