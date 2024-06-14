#version 450 core

#define ALPHA_MODE_OPAQUE 0
#define ALPHA_MODE_MASK 1
#define ALPHA_MODE_BLEND 2

#define MAX_LIGHT_COUNT 20
#define EPSILON 0.1

// Using 48 as it's "16*3"
// The first 16 control points are for the initial u factor and the later 16 point are for the v factor.
#define NUM_CONTROL_POINTS_MAX 48

layout(std140, binding = 0) uniform Camera
{
    mat4 u_ViewProjectionMatrix;
    vec4 u_CameraPosition;
    vec4 u_CameraDirection;
};


layout (location = 0) in vec3 v_Position;
layout (location = 1) in vec3 v_Normal;
layout (location = 2) in vec2 v_TexCoord;
layout (location = 3) in vec4 v_Color;
layout (location = 4) in flat int v_EntityId;

layout (location = 0) out vec4 o_Color;
layout (location = 1) out int o_Entity; // -1 = no entity. (for now.)

// vec3 CalculateLighting(vec3 lightColor, vec3 lightPos, vec3 lightDir, float lightIntensity)
// {
//     // ambient
//     float ambientStrength = 0.05 * lightIntensity;
//     vec3 ambient = ambientStrength * lightColor;

//     // diffuse
//     float diff = max(dot(v_Normal, lightDir), 0.0);
//     vec3 diffuse = diff * lightColor * lightIntensity;

//     // specular
//     float specularStrength = 0.5;
//     vec3 viewDir = normalize(u_CameraPosition.xyz - v_Position);
//     vec3 reflectDir = normalize(reflect(-lightDir, v_Normal));
//     float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32);
//     vec3 specular = specularStrength * spec * lightColor * lightIntensity;

//     return (ambient + diffuse + specular) * o_Color.rgb;
// }

// vec3 AddDirectionalLight(Light light)
// {
//     vec3 lightColor = light.Color.rgb;
//     vec3 lightPos = light.Position.xyz;
//     vec3 lightDir = normalize(light.Direction.xyz);
//     float lightIntensity = light.Intensity;

//     return CalculateLighting(lightColor, lightPos, lightDir, lightIntensity);
// }

// vec3 AddPointLight(Light light)
// {
//     vec3 lightColor = light.Color.rgb;
//     vec3 lightPos = light.Position.xyz;
//     vec3 lightDir = normalize(lightPos - v_Position);
//     float distance = distance(v_Position, lightPos);
//     float lightIntensity = light.Intensity * max(sign(dot(v_Normal, lightDir)), 0);
//     lightIntensity =  lightIntensity / ((1) + (0.09) * distance + (0.032) * (distance * distance));
//     lightIntensity = lightIntensity * clamp((1-(distance / light.Range)) * 10, 0., 1.);


//     return CalculateLighting(lightColor, lightPos, lightDir, lightIntensity);
// }

// vec3 AddSpotLight(Light light)
// {
//     vec3 lightColor = light.Color.rgb;
//     vec3 lightPos = light.Position.xyz;
//     vec3 lightDir = normalize(lightPos - v_Position);

//     if(dot(normalize(lightPos - v_Position) , normalize(-light.Direction.xyz)) <= cos(light.Cutoff))
//     {
//         return vec3(0);
//     }

//     float distance = distance(v_Position, lightPos);
//     float lightIntensity = light.Intensity * max(sign(dot(v_Normal, lightDir)), 0);
//     lightIntensity =  lightIntensity / ((1) + (0.09) * distance + (0.032) * (distance * distance));
//     lightIntensity = lightIntensity * clamp((1-(distance / light.Range)) * 10, 0., 1.);

//     return CalculateLighting(lightColor, lightPos, lightDir, lightIntensity);
// }

void main()
{
    o_Color = vec4((v_Normal + 1) * 0.5, 1);

    // if(materialParameters.PbrMetallicRoughness.BaseColorTexture.Index > -1)
    // {
    //     o_Color *= SampleTexture(materialParameters.PbrMetallicRoughness.BaseColorTexture.Index);
    //     if(materialParameters.PbrMetallicRoughness.BaseColorTexture.TexCoord > 0)
    //     {
    //         o_Color = vec4(0.8, 0.2, 0.3, 1.0);
    //     }
    // }

    // if(float(materialParameters.AlphaMode) == float(ALPHA_MODE_MASK) && o_Color.a <= materialParameters.AlphaCutoff) discard;

    // vec3 result = vec3(0.0);

    // for(int i = 0; i < int(lights.lightCount); i++)
    // {
    //     Light light = lights.lights[i];
    //
    //     if(light.Type == 0)
    //     {
    //         result += AddDirectionalLight(light);
    //     }
    //     else if(light.Type == 1)
    //     {
    //         result += AddPointLight(light);
    //     }
    //     else if(light.Type == 2)
    //     {
    //         result += AddSpotLight(light);
    //     }
    // }

//    float alpha = materialParameters.AlphaMode == int(2) ? o_Color.a : 1.0f;
    o_Entity = v_EntityId;
}
