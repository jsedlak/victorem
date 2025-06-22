var builder = DistributedApplication.CreateBuilder(args);

// this hosts our own Keycloak instance for authentication and authorization
var keycloak = builder.AddKeycloak("keycloak", 8080)
    .WithDataVolume()
    .WithRealmImport("./Realms");

// our silo & api host
builder.AddProject<Projects.Victorem_Silo_Host>("silo")
    .WithExternalHttpEndpoints()
    .WithReference(keycloak);

builder.Build().Run();
