#version 450 core

#define ALPHA_MODE_OPAQUE 0
#define ALPHA_MODE_MASK 1
#define ALPHA_MODE_BLEND 2

#define MAX_LIGHT_COUNT 20
#define EPSILON 0.1

// Using 48 as it's "16*3"
// The first 16 control points are for the initial u factor and the later 16 point are for the v factor.
#define NUM_CONTROL_POINTS_MAX 48

layout (location = 0) out vec4 o_Color;
layout (location = 1) out int o_Entity; // -1 = no entity. (for now.)

void main()
{
    o_Color = vec4(1, 1, 1, 1);
    o_Entity = -1;
}
