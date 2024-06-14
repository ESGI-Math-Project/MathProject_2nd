#version 450 core

#define ALPHA_MODE_OPAQUE 0
#define ALPHA_MODE_MASK 1
#define ALPHA_MODE_BLEND 2

#define MAX_LIGHT_COUNT 20
#define EPSILON 0.1

// Using 48 as it's "16*3"
// The first 16 control points are for the initial u factor and the later 16 point are for the v factor.
#define NUM_CONTROL_POINTS_MAX 48

layout(location = 0) in vec3 a_Position;


void main() {
    gl_Position = vec4(a_Position, 1.0);
}

