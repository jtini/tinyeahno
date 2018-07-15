// @flow
/* eslint-disable no-unused-vars */
declare var __DISABLE_SSR__: boolean;
declare var __CLIENT__: boolean;
declare var __SERVER__: boolean;
declare var __DEVELOPMENT__: boolean;
declare var __DEVTOOLS__: boolean;
declare var __PERFTOOLS__: boolean;

declare var require: {
	(id: string): any;
	ensure(ids: Array<string>, callback?: { (require: typeof require): void }, chunk?: string): void
};
