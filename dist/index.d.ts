export interface EnvOptions {
    required?: string[];
    optional?: string[];
}
export declare function checkEnv(options?: EnvOptions): true;
