import * as gfx from 'gophergfx'

export class RobotArm extends gfx.Skeleton
{
    constructor()
    {
        super();
    }

    public createGeometry(): void
    {
        const axes = gfx.Geometry3Factory.createAxes(1);
        axes.position.set(0, 1, 0);
        this.add(axes);
    }
}