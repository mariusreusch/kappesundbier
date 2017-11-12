The .ebextensions folder is necessary to configure the aws nginx server in the AWS cloud.

The only customization is the change of the client_max_body_size parameter in order to allow the upload of images up to 50 mega byte. 

The gradle task createSourceBundleForAwsDeployment includes the .ebextensions-folder in the artifact that is deployed on the AWS cloud. The .ebextensions folder has to be in a zip together with the spring boot jar. AWS will detect the folder within the zip and automatically configure the nginx server. 