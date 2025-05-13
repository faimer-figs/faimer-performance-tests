package org.openmrs.performance.utils;
import io.gatling.javaapi.core.ChainBuilder;
import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import static org.openmrs.performance.Constants.KEYCLOAK_URL;
import static org.openmrs.performance.Constants.KEYCLOAK_CLIENT_ID;
import static org.openmrs.performance.Constants.KEYCLOAK_USERNAME;
import static org.openmrs.performance.Constants.KEYCLOAK_PASSWORD;

public class KeycloakAuth {

    public static ChainBuilder login =
        exec(
            http("Get Access Token")
                .post(KEYCLOAK_URL + "/realms/ozone/protocol/openid-connect/token")
                .formParam("grant_type", "password")
                .formParam("client_id", KEYCLOAK_CLIENT_ID)
                .formParam("username", KEYCLOAK_USERNAME)
                .formParam("password", KEYCLOAK_PASSWORD)
                .check(status().is(200))
                .check(jsonPath("$.access_token").saveAs("access_token"))
        );
}
