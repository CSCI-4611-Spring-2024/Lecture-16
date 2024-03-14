import * as gfx from 'gophergfx'

export class RobotArm extends gfx.Skeleton
{
    constructor()
    {
        super();
    }

    public createHierarchy(): void
    {
        const upperArm = new gfx.Bone();
        upperArm.name = "upperArm";
        upperArm.direction.set(0, 1, 0);
        upperArm.length = 0.05;
        this.add(upperArm);

        const middleArm = new gfx.Bone();
        middleArm.name = "middleArm";
        middleArm.direction.set(0, 1, 0);
        middleArm.length = 0.05;
        upperArm.add(middleArm);

        const lowerArm = new gfx.Bone();
        lowerArm.name = "lowerArm";
        lowerArm.direction.set(0, 1, 0);
        lowerArm.length = 0.05;
        middleArm.add(lowerArm);
    }

    public createGeometry(): void
    {
        this.children.forEach((child: gfx.Node3) => {
            if(child instanceof gfx.Bone)
            {
                this.createGeometryRecursive(child);
            }
        });
    }

    public createGeometryRecursive(bone: gfx.Bone): void
    {
        console.log(bone.name);
        
        bone.children.forEach((child: gfx.Node3) => {
            if(child instanceof gfx.Bone)
            {
                this.createGeometryRecursive(child);
            }
        });
    }
}