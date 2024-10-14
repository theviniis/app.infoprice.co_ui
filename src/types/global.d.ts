declare type Replace<OriginalType, ReplaceType> = Omit<OriginalType, keyof ReplaceType> & ReplaceType;

declare type UnknownObject = Record<string, unknown>;
