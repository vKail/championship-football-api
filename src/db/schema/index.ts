// src/db/schema/index.ts
// ✅ PRIMERO los enums
export * from './enums/match-status';
export * from './enums/member-type';
export * from './enums/user-role';

// ✅ LUEGO las tablas
export * from './categories';
export * from './persons';
export * from './teams';
export * from './users';
export * from './seasons';
export * from './matches'; // Ahora sí puede usar match_status
export * from './goals';
export * from './match-lineup';
export * from './team-members';
