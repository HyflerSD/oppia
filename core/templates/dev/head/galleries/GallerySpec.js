// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Unit tests for the controller of the gallery page.
 *
 * @author sll@google.com (Sean Lip)
 */

describe('Gallery controller', function() {
  beforeEach(module('oppia'));

  describe('Gallery', function() {
    var scope, ctrl, rootScope, $httpBackend;

    beforeEach(function() {
      module('ui.bootstrap');
    });

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/galleryhandler/data').respond({
        allow_yaml_file_upload: false,
        explorations_list: [{
          id: '3',
          title: 'Geography 2',
          category: 'Geography',
          objective: 'can view more maps',
          language: 'español',
          last_updated: 12345678912345,
          community_owned: false,
          status: 'featured'
        }, {
          id: '5',
          title: 'Landmarks',
          category: 'Geography',
          objective: 'can view maps',
          language: 'English',
          last_updated: 12345678911111,
          community_owned: false,
          status: 'public'
        }, {
          id: '6',
          title: 'My Exploration',
          category: 'Personal',
          objective: 'can be for myself',
          language: 'English',
          last_updated: 12345678954322,
          community_owned: false,
          status: 'public'
        }],
        preferred_language_codes: ['en']
      });

      GLOBALS.LANGUAGE_CODES_AND_NAMES = [{
        code: 'en',
        name: 'English'
      }, {
        code: 'es',
        name: 'español'
      }, {
        code: 'hr',
        name: 'hrvatski'
      }];
      scope = $rootScope.$new();
      rootScope = $rootScope;
      ctrl = $controller('Gallery', {
        $scope: scope,
        alertsService: null,
        ExplorationCreationButtonService: {
          showCreateExplorationModal: null,
          showUploadExplorationModal: null
        },
        oppiaDatetimeFormatter: null
      });
    }));

    it('should show correct explorations', function() {
      // Temporarily removed test for now, since we split up the gallery
      // controllers.
      // TODO(sll): Reinstate tests (and write more tests for the gallery).
    });
  });
});
