import { DocumentMetadata, IDocumentMetadata } from './document-metadata.model';
import { DocumentNode, IDocumentNode } from './document-node.model';
import { IUser, User } from './user.model';

export interface IDocumentConsolidate {
  id: string;
  documentMetadata: IDocumentMetadata;
  documentNode?: IDocumentNode;
  assignedUsers: IUser[];
  startDate: Date;
  consultationDeadline: Date;
  excludedFromConsultation: boolean;
}

export class DocumentConsolidate {
  id: string;
  documentMetadata: DocumentMetadata;
  documentNode?: DocumentNode;
  assignedUsers: User[];
  startDate: Date;
  consultationDeadline: Date;
  excludedFromConsultation: boolean;

  constructor(data: IDocumentConsolidate) {
    this.fromJson(data);
  }

  fromJson(data: IDocumentConsolidate) {
    this.id = data.id;
    this.documentMetadata = new DocumentMetadata(data.documentMetadata);
    this.documentNode = new DocumentNode(data.documentNode);
    this.assignedUsers = data.assignedUsers.map(iUser => new User(iUser));
    this.startDate = new Date(data.startDate);
    this.consultationDeadline = new Date(data.consultationDeadline);
    this.excludedFromConsultation = data.excludedFromConsultation;
  }

  toJson(): IDocumentConsolidate {
    return {
      id: this.id,
      documentMetadata: this.documentMetadata.toJson(),
      documentNode: this.documentNode.toJson(),
      assignedUsers: this.assignedUsers.map(user => user.toJson()),
      startDate: this.startDate,
      consultationDeadline: this.consultationDeadline,
      excludedFromConsultation: this.excludedFromConsultation
    };
  }
}

export interface IDocumentConsultationData {
  startDate: Date;
  consultationDeadline: Date;
  excludedFromConsultation: boolean;
}

export class DocumentConsultationData {
  startDate: Date;
  consultationDeadline: Date;
  excludedFromConsultation: boolean;

  constructor(data: IDocumentConsultationData) {
    this.fromJson(data);
  }

  fromJson(data: IDocumentConsultationData) {
    this.startDate = data.startDate;
    this.consultationDeadline = data.consultationDeadline;
    this.excludedFromConsultation = data.excludedFromConsultation;
  }

  toJson(): IDocumentConsultationData {
    return {
      startDate: this.startDate,
      consultationDeadline: this.consultationDeadline,
      excludedFromConsultation: this.excludedFromConsultation
    };
  }
}
